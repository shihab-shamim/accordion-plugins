import { __ } from '@wordpress/i18n';

import { Button ,PanelBody, __experimentalInputControl as InputControl} from '@wordpress/components'
import {useEffect,useState} from "react"

const General = ({ attributes, setAttributes,selected }) => {
  const { purposeType,according } = attributes;

  return (
    <>

<PanelBody
      
      className="bPlPanelBody"
      title={__(`Card-${selected+1}`, "b-blocks")}
      initialOpen={false}
    >
      <InputControl
	label="Question"
	labelPosition="top"
	value={''}
	type="text"

/>
      
    </PanelBody>
  
  <Button  onClick={()=>{
    const newAccording=[...according]
    newAccording.push({
     que:"Sit amet consectetur velit integer tincidunt sceleries",
     ans:"Sit amet consectetur velit integer tincidunt sceleries nodalesry volutpat neque fermentum malesuada sceleris quecy massa lacus ultrices eget leo cras odio blandit rhoncus eues feugiat. Sit amet consectetur velit integer tincidunt sceleries nodalesry volutpat neque fermentum malesuada sceleris quecy massa lacus ultrices eget leo cras odio blandit rhoncus eues feugiat. Sit amet consectetur velit integer tincidunt sceleries nodalesry volutpat neque fermentum malesuada sceleris quecy massa lacus ultrices eget leo cras odio blandit rhoncus."
    })
    setAttributes({according:newAccording })

  }} isPrimary>Add Accordion</Button>
    
    </>
  )
}

export default General