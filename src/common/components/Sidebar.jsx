import React from 'react';
import { Tab } from 'semantic-ui-react';
import HeaderTab from './sidebar/HeaderTab';
import MembersTab from './sidebar/MembersTab';
import ExportTab from './sidebar/ExportTab';
import SettingsTab from './sidebar/SettingsTab';

const panes = [
  {
    menuItem: { key: 'header', icon: 'wpforms', content: 'Header' },
    render: () => <HeaderTab />,
  },
  {
    menuItem: { key: 'members', icon: 'users', content: 'Members' },
    render: () => <MembersTab />,
  },
  {
    menuItem: { key: 'export', icon: 'download', content: 'Export' },
    render: () => <ExportTab />,
  },
  {
    menuItem: { key: 'settings', icon: 'cogs', content: 'Settings' },
    render: () => <SettingsTab />,
  },
];

function Sidebar() {
  return (
    <div className='six wide column utbx-fitted-max'>
      <Tab panes={panes} />
    </div>
  );
}

export default Sidebar;
