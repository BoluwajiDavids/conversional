import { render, cleanup } from '@testing-library/react';
import H1 from '../../../components/headers/h1';


describe("Ensure that component display correctly", ()=>{
   afterEach(cleanup);
   it("Shows nothing when text prop is not provided", () => {
     const {container} = render(<H1 />);
      expect(container.innerHTML).toBe('<h1></h1>');
   });
   
   it("Shows the value of text prop when it is passed", () => {
      const { getByText } = render(<H1 text="Header" />);
      expect(getByText("Header")).toBeVisible();
    });

});