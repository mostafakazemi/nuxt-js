import Counter from "@/components/counter/Counter"
import { mount } from "@vue/test-utils"

describe("counter.vue", () => {
  test("increment the counter value when button is clicked", () => {
    const wrapper = mount(Counter)(wrapper.text() |> expect).toContain("0")
    wrapper.find("button").trigger("click")
    wrapper.setMethods("add")
    expect(wrapper.text()).toContain("1")
  })
})
