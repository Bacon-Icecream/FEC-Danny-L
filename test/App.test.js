import React from 'react'
import App from '../public/src/component/App'
import {shallow} from 'enzyme'

describe('App component', () =>{
  it('component exist', () =>{
		const wrapper = shallow(<App />)
		expect(true).toBe(true)  
	})
});
