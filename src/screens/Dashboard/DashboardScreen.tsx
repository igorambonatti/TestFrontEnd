import React, { useEffect, useRef, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import Button from 'components/Button'
import Input from 'components/Input'
import getValidationErrors from 'hooks/getValidationErros'
import { useSelector } from 'hooks/useSelector'
// import { translate } from 'lib/i18n/i18n'
import { Container } from 'screens/Dashboard/DashboardScreen.styles'
import {
  welcomeRequestMessage,
  setOnlineList,
  setOfflineList,
} from 'store/Welcome/WelcomeCreators'
import { getOfflineList, getOnlineList } from 'store/Welcome/WelcomeSelector'
import * as Yup from 'yup'

const DashboardScreen: React.FC = () => {
  const offlineList = useSelector(getOfflineList)
  const onlineList = useSelector(getOnlineList)
  const [online, setOnline] = useState<boolean>(false)
  // const [activeList, setActiveList] = useState<any[]>([])
  const dispatch = useDispatch()
  const formRef = useRef<FormHandles>(null)

  useEffect(() => {
    dispatch(welcomeRequestMessage())
  }, [dispatch])

  const handleSubmitForm = useCallback(
    async (data: any) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          invoiceNumber: Yup.number().required('InvoiceNumber required'),
          series: Yup.string().required('Series required'),
          value: Yup.string().required('Value required'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })
        const validateList = offlineList.filter(offlineItem => {
          return offlineItem.invoiceNumber === data.invoiceNumber
        })

        if (validateList.length > 0) {
          return console.log('error duplicated')
        }
        if (online) {
          const object = onlineList.concat(data)
          return dispatch(setOnlineList(object))
        }
        const object = offlineList.concat(data)
        dispatch(setOfflineList(object))
      } catch (err: any) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    },
    [online, onlineList, offlineList],
  )

  const changeStateApplication = useCallback(() => {
    if (!online) {
      dispatch(setOnlineList(offlineList))
    }
    if (online) {
      dispatch(setOfflineList(onlineList))
    }
    setOnline(prev => !prev)
  }, [offlineList, onlineList, online])

  return (
    <Container>
      <Button type="submit" onClick={changeStateApplication}>
        {online ? 'ONLINE' : 'OFFLINE'}
      </Button>
      <Form ref={formRef} onSubmit={handleSubmitForm}>
        <Input name="invoiceNumber" placeholder="Invoice Number"></Input>
        <Input name="series" placeholder="Series"></Input>
        <Input name="value" placeholder="Value"></Input>
        <Button type="submit">SUBMIT</Button>
      </Form>
      <h1>ONLINE LIST</h1>
      {onlineList?.map(item => {
        return (
          <>
            <div>
              <span>{item?.invoiceNumber}</span>
              <span>{item?.series}</span>
              <span>{item?.value}</span>
            </div>
          </>
        )
      })}
      <h1>OFFLINE LIST</h1>
      {offlineList?.map(item => {
        return (
          <>
            <div>
              <span>{item?.invoiceNumber}</span>
              <span>{item?.series}</span>
              <span>{item?.value}</span>
            </div>
          </>
        )
      })}
    </Container>
  )
}

export default DashboardScreen
