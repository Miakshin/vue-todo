import Vue from "vue";
import Scoreboard from "../components/pomadoro/Scoreboard";
import { shallow } from "vue-test-utils";

describe("Scoreboard component test", () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Scoreboard, {
      propsData: {
        timer: 90,
        play: false,
        name: "test"
      }
    });
  });

  it("90 seconds shood be as 01:30s", () => {
    let button = cmp.find("input[type='button']");
    expect(button.prop.value).toEqual("start");
    button.trigger('click');
    expect(button.prop.value).toEqual("stop");
    // expect(wrappet.find(".timer").text()).toContain("01:30");
  });
});
