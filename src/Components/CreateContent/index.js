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
  const [quillCollection, setQuillCollection] = useState([]);

  function handleView(key) {
    setSelectedView(key);
    if(key === 'text') {
      let data = [...quillCollection], editor = <QuillEditor />;
      data.push(editor);
      setQuillCollection(data);
    }
    setToggle(false);
  }

  function renderView() {
    return <img style={{maxWidth: '100%'}} src={Image} alt = "" />
  }

  function renderQuillCollection() {
    return quillCollection.map((listItem) => {
      return (
        <div className='mb-20 ml-20'>
          {listItem}
        </div>
      )
    })
  }

  return (
    <div className="">
      <div className="create-icon-container flex vertical-align">
        <span className="create-icon" onClick={() => setToggle(!toggle)}>+</span>
        {
          toggle &&
          <CreateContent handleView={handleView} />
        }
      </div>
        {
          selectedView === 'image' &&
          renderView()
        }
        {
          selectedView === 'text' && quillCollection?.length > 0 &&
          renderQuillCollection()
        }
    </div>
  )
}