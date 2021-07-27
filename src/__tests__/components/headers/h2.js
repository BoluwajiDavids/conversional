import { render,  cleanup } from '@testing-library/react';
import H2 from '../../../components/headers/h2'; 


describe("Ensure that component display correctly", ()=>{
   afterEach(cleanup);
   it("Shows nothing when text prop is not provided", () => {
     const {container} = render(<H2 />);
      expect(container.innerHTML).toBe('<h2></h2>');
   });
   
   it("Shows the value of text prop when it is passed", () => {
      const { getByText } = render(<H2 text="Header" />);
      expect(getByText("Header")).toBeVisible();
    });

});