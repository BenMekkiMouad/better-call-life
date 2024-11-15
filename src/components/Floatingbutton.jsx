import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

function Floatingbutton() {

  const {t} = useTranslation();

  return (
    <div className="fixed bottom-8 right-8">
        <Link to="/reservation">
            <button className="bg-red-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300">
                {t('app')} <CalendarDaysIcon className="w-6 h-6 inline-block ml-2" />
            </button>
        </Link>
    </div>
  )
}

export default Floatingbutton