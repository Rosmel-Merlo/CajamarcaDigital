import "./NavBarStyle.css"
import { Button, makeStyles, Persona, Text } from '@fluentui/react-components'
import { IButtonGroup } from '../../interfaces/IButtonsGroup/IButtonGroup';
import { Logout } from '../logout/Logout';
import { useBoolean } from "@fluentui/react-hooks";

interface INavBar {
  leftButtons: IButtonGroup[];
  rightButton?: IButtonGroup[];
}
const useStyles = makeStyles({
  booton: {
    height: "48px",
    minWidth: "48px",
    backgroundColor:'#125812',
    ":hover":{
      backgroundColor:'white',
      color:'#125812'
    }
  },
});
const NavBar = (props: INavBar) => {

  const style = useStyles();
  const [isOpen, { setTrue: openLogout, setFalse: dismissLogout }] =
    useBoolean(false);
  return (
    <div className="nav">
      <div className="nav-leftItems">
        {props.leftButtons.map((button, index) => (
          <Button
            key={index}
            onClick={button.onClick}
            appearance={button.type == undefined ? "primary" : button.type}
            size="large"
            className={style.booton}
            icon={button.icon}
          />
        ))}
        <div className="contendor">
          <Text className="contendor-texto" font="base" size={500}>
            Bodega Chelita
          </Text>
        </div>
      </div>
      <div className="nav-rightItems">
        {props.rightButton?.map((button, index) => (
          <Button
            key={index}
            onClick={button.onClick}
            appearance={button.type == undefined ? "primary" : button.type}
            size="large"
            className={style.booton}
            icon={button.icon}
          />
        ))}
        <Button
          className={style.booton}
          appearance="primary"
          onClick={() => {
             openLogout();
          }}
          icon={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Persona
                presence={{ status: "available" }}
                avatar={{
                  image: {
                    src: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png",
                  },
                }}
              />
            </div>
          }
        />
        <Logout isOpen={isOpen} onDismiss={dismissLogout} customSize={400} />
      </div>
    </div>
  )
}
export default NavBar