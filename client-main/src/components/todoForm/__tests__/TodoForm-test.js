import mount from "@test";
import renderer from "react-test-renderer";
import TodoForm from "../TodoForm";

// auto generated by react-automate-pro test will fail
describe(TodoForm, () => {
  const component = mount(<TodoForm />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
    const componentRender = renderer.create(<TodoForm />);
    const tree = componentRender.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should have the correct class name", () => {
    expect(component.find("todoForm")).toEqual(1);
  });
});
