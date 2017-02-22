import React from 'react';
import { Link } from 'react-router';
import App from 'grommet/components/App';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';
import CloseIcon from 'grommet/components/icons/base/Close';

export default props => (
  <App centered={false}>
    <Split
      fixed
      flex='right'
      priority='right'
    >
      <Sidebar full colorIndex='neutral-1'>
        <Box direction='column'>
          <Header
            justify='between'
            pad='medium'
          >
            <Title>My App</Title>
            <Button
              icon={<CloseIcon />}
              onClick={() => {}}
              a11yTitle='Close Menu'
            />

          </Header>

          <Menu
            pad={{ vertical: 'small' }}
            align='start'
            direction='column'
            justify='between'
            primary
          >
            <Link
              className='link grommetux-anchor'
              to='#'
              activeClassName='active'
            >
              Route 1
            </Link>
            <Link
              className='link grommetux-anchor'
              to='#'
              activeClassName='active'
            >
              Route 2
            </Link>
            <Link
              className='link grommetux-anchor'
              to='#'
              activeClassName='active'
            >
              Route 3
            </Link>
          </Menu>
        </Box>
      </Sidebar>
      {props.children}
    </Split>
  </App>
);
