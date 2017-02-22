import React from 'react';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import EditIcon from 'grommet/components/icons/base/Edit';
import AddIcon from 'grommet/components/icons/base/Add';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';

export default () => (
  <Split
    flex='left'
    priority='left'
    separator
  >
    <Article pad={{ horizontal: 'medium' }}>
      <Header pad={{ vertical: 'small' }}>
        <Title>Some amazing content</Title>
      </Header>
    </Article>

    <Sidebar size='medium' colorIndex='light-2'>
      <Header pad='small'>
        <Title>My content menu</Title>
      </Header>
      <Menu pad={{ horizontal: 'large' }} align='center'>
        <Box
          pad={{ vertical: 'small' }}
          size='large'
          align='start'
          justify='start'
          separator='bottom'
        >
          <Button
            type='button'
            plain
            icon={<EditIcon />}
            label='Button A'
            onClick={() => {}}
          />
          <Button
            type='button'
            icon={<LinkPrevious />}
            plain
            label='Button B'
            onClick={() => {}}
          />
          <Button
            type='button'
            icon={<AddIcon />}
            plain
            label='Button C'
            onClick={() => {}}
          />
        </Box>

        <Box
          pad={{ vertical: 'small' }}
          size='large'
          align='start'
          justify='start'
          separator='bottom'
        >
          <Button
            type='button'
            plain
            icon={<EditIcon />}
            label='Button 1'
            onClick={() => {}}
          />
          <Button
            type='button'
            plain
            icon={<LinkPrevious />}
            label='Button 2'
            onClick={() => {}}
          />
          <Button
            type='button'
            icon={<AddIcon />}
            plain
            label='Button 3'
            onClick={() => {}}
          />
        </Box>
      </Menu>
    </Sidebar>
  </Split>
);
