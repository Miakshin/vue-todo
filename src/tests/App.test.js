import Vue from 'vue'
import App from '../App'

describe('App.test.js', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = Vue.extend(App)
    vm = new cmp({
      data: {
        messages: ['Cat']
      }
    }).$mount() // Instances and mounts the component
  })

  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(['Cat'])
  })
})
