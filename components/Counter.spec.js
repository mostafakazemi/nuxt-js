import Counter from "~/components/Counter";
import { mount } from "@vue/test-utils";

describe('Counter.vue', () => {
  test('increment the counter value when button is clicked', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('0')
    wrapper.find('button').trigger('click')
    wrapper.setMethods('add')
    expect(wrapper.text()).toContain('1')
  })
})
