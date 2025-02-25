import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleEventHandler,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderNavigation,
  Label,
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  Tooltip,
} from "@fluentui/react-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIconsCatalogo } from "../../hooks/iconCatalog/useIconsCatalogo";
import { useBoolean } from "@fluentui/react-hooks";
import "../siderBar/SiderBarStyle.css";
import { TreeMenu } from "../../interfaces/ISiderBar/ISiderBar";
interface ISiderBar {
  isOpen: boolean;
  width: number;
  linkNavGroups: TreeMenu[];
}

export const SiderBar = (props: ISiderBar) => {
  const navigate = useNavigate();
  const { Icon } = useIconsCatalogo(24);
  const [openItems, setOpenItems] = useState(["0"]);
  const [optionselected, setOptionSelected] = useState<string | unknown>(
    "productos"
  );
  const [isOpenIcons, { setTrue: openIcons, setFalse: dismissIcons }] =
    useBoolean(true);

  const handleToggle: AccordionToggleEventHandler<string> = (event, data) => {
    if (event !== undefined) {
      setOpenItems(data.openItems);
    }
  };
  const onClickOpenSider = () =>
    isOpenIcons == true ? dismissIcons() : openIcons();

  const selectTab = (event: SelectTabEvent, data: SelectTabData) => {
    if (event !== undefined) {
      setOptionSelected(data.value ?? "");
      navigate(`${data.value}`);
    }
  };
  return (
    <>
      <Drawer
        type={"inline"}
        position="start"
        open={props.isOpen}
        style={
          isOpenIcons
            ? {
                width: `${props.width}px`,
                height: "calc(100vh - 48px",
                transition: "width 0.5s ease",
              }
            : {
                width: "48px",
                height: "calc(100vh - 48px",
                transition: "width 0.5s ease",
              }
        }
      >
        <div className="siderbarDrawe">
          {isOpenIcons === true ? (
            <div className="siderbar-general">
              <DrawerHeader style={{ padding: "0px 25px" }}>
                <DrawerHeaderNavigation>
                  <Toolbar style={{ justifyContent: "end" }}>
                    <ToolbarGroup>
                      <ToolbarButton
                        aria-label="Close panel"
                        appearance="subtle"
                        icon={Icon("FechasIzquierda")}
                        onClick={onClickOpenSider}
                      />
                    </ToolbarGroup>
                  </Toolbar>
                </DrawerHeaderNavigation>
              </DrawerHeader>

              <DrawerBody
                style={{
                  padding: "0px",
                  border: "0px",
                }}
              >
                <Accordion
                  openItems={openItems}
                  onToggle={handleToggle}
                  multiple
                >
                  {props.linkNavGroups.map((group, indexheander) => (
                    <AccordionItem value={indexheander} key={indexheander}>
                      <AccordionHeader size={"large"}>
                        {group.name}
                      </AccordionHeader>
                      <TabList
                        size="small"
                        vertical
                        appearance="subtle"
                        selectedValue={optionselected}
                        onTabSelect={selectTab}
                      >
                        <AccordionPanel>
                          {group.links.map((link, index: number) => (
                            <Tab
                              key={index}
                              style={{
                                margin: "0px 0px",
                                padding: "10px 10px",
                              }}
                              icon={Icon(link.icon)}
                              value={link.url}
                            >
                              <Label
                                size="medium"
                                style={{
                                  fontWeight: "initial",
                                  fontSize: "14px",
                                }}
                              >
                                {link.name}
                              </Label>
                            </Tab>
                          ))}
                        </AccordionPanel>
                      </TabList>
                    </AccordionItem>
                  ))}
                </Accordion>
              </DrawerBody>
            </div>
          ) : (
            <div className="siderbar-icons">
              <DrawerHeader style={{ padding: "0px 25px" }}>
                <DrawerHeaderNavigation>
                  <Toolbar style={{ justifyContent: "end" }}>
                    <ToolbarGroup>
                      <ToolbarButton
                        aria-label="Close panel"
                        appearance="subtle"
                        icon={Icon("FechasDerecha")}
                        onClick={onClickOpenSider}
                      />
                    </ToolbarGroup>
                  </Toolbar>
                </DrawerHeaderNavigation>
              </DrawerHeader>

              <DrawerBody
                style={{
                  padding: "3px",
                }}
              >
                <Accordion
                  openItems={openItems}
                  onToggle={handleToggle}
                  multiple
                >
                  {props.linkNavGroups.map((group, index) => (
                    <AccordionItem value={index} key={index}>
                      <Tooltip
                        content={`${group.name}`}
                        positioning={"after"}
                        relationship="inaccessible"
                      >
                        <AccordionHeader
                          size={"large"}
                          button={{ style: { padding: "0px" } }}
                        ></AccordionHeader>
                      </Tooltip>
                      <AccordionPanel style={{ margin: "0px" }}>
                        <TabList
                          size="small"
                          vertical
                          appearance="subtle"
                          onTabSelect={selectTab}
                          style={{ width: "100%" }}
                        >
                          {group.links.map((link, index: number) => (
                            <Tooltip
                              key={index}
                              content={`${group.name}`}
                              positioning={"after"}
                              relationship="inaccessible"
                            >
                              <Tab
                                key={index}
                                style={{
                                  margin: "0px 3px",
                                  width: "100%",
                                  padding: "10px 7px",
                                }}
                                icon={Icon("Agregar")}
                                value={link.url}
                              ></Tab>
                            </Tooltip>
                          ))}
                        </TabList>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </DrawerBody>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};
