import React, { useState } from 'react';
import Text from '../../assets/textImage.png';
import Image from '../../assets/image.png';
import './style.scss';
import QuillEditor from '../QuillEditor';

const dataSet = [
  {
    title: 'Text',
    supportiveText: 'Just start writing with plain text',
    icon: Text,
    key: 'text'
  },
  {
    title: 'Image',
    supportiveText: 'Uplaod or embed with a link',
    icon: Image,
    key: 'image'
  },
]
export function CreateContent(props) {

  return <div className="create-content-wrapper">
    <p>Choose</p>
    <ul>
      {dataSet.map((listItem, index) => {
        return <li className="flex ccw-list" onClick={() => props.handleView(listItem.key)} key={'listitem' + index}>
          <div className="ccw-icon"><img src={listItem.icon} alt=""/></div>
          <div>
            <p className="ccw-title">{listItem.title}</p>
            <p className="ccw-subheading">{listItem.supportiveText} </p>
          </div>
        </li>
      })}
    </ul>
  </div>
}

export function CreateIcon(props) {
  const [toggle, setToggle] = useState(false);
  const [selectedView, setSelectedView ] = useState('');

  function handleView(key) {
    setSelectedView(key);
    setToggle(false);
  }

  function renderView() {
    switch(selectedView) {
      case 'image': 
        return <img src={Image} alt = "" />
      case 'text':
        return <QuillEditor />
      default:
        return '';
    }
  }
  return <div className="">
    <div className="create-icon-container flex vertical-align">
      <span className="create-icon" onClick={() => setToggle(!toggle)}>+</span>
      {
        toggle &&
        <CreateContent handleView={handleView} />
      }
    </div>
      {
        selectedView &&
        renderView()
      }
  </div>
}