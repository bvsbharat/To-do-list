import mount from "@test";
import renderer from "react-test-renderer";
import TodoItem from "../TodoItem";

// auto generated by react-automate-pro test will fail
describe(TodoItem, () => {
  const component = mount(<TodoItem />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
    const componentRender = renderer.create(<TodoItem />);
    const tree = componentRender.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should have the correct class name", () => {
    expect(component.find("todoItem")).toEqual(1);
  });
});
