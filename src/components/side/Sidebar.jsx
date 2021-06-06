import React from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
} from "react-pro-sidebar";

import {
    CalendarTodayOutlined,
    HomeOutlined,
    SettingsOutlined
} from "@material-ui/icons";
import { WiDayCloudy } from "react-icons/wi"

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const Sidebar = () => {

    const activeStyle = {
        color: "rgb(108, 95, 196)",
    }

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed="false">

                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem icon={<HomeOutlined />}>Home</MenuItem>
                            <MenuItem active={true} icon={<CalendarTodayOutlined style={activeStyle} />}>
                                Calendar
                            </MenuItem>
                            <MenuItem icon={<WiDayCloudy size={30} />}>Weather</MenuItem>
                            <MenuItem icon={<SettingsOutlined />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>
    );
};

export default Sidebar
