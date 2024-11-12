import React from 'react'
import Navbar from './Navbar'
import AppointmentScheduler from './AppointmentScheduler'
import { useTranslation } from 'react-i18next'
import { InlineWidget } from 'react-calendly'

function Appointment() {
  const { t } = useTranslation()

  return (
    <>
    
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-12">{t('app')}</h2>
      <div className='max-w-6xl mx-auto px-4'>
       {/*  <AppointmentScheduler /> */}
      </div>
      <InlineWidget url="https://calendly.com/drhelalidrisd/45min" />
        
    </>
  )
}

export default Appointment