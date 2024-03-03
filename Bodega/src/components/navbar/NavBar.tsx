import React from 'react'
import "./NavBarStyle.css"
import { Button } from '@fluentui/react-components'
import { AddRegular, AlertRegular, CalendarMonthRegular } from '@fluentui/react-icons'
const NavBar = () => {

  return (
    <div className='nav-contendor'>
      <div>
        <Button size="large" icon={<AddRegular/>} />
      </div>
      <div>
        <Button size="large" icon={<AddRegular/>} />
        <Button size="large" icon={<AddRegular/>} />
        <Button size="large" icon={<AddRegular/>} />
        <Button size="large" icon={<AlertRegular fontSize={100}/>} />

      </div>

    </div>
  )
}
export default NavBar