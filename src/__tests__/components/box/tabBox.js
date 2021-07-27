import { render, cleanup } from '@testing-library/react';
import Box from '../../../components/box/tabBox';


describe("Ensure that given an array of items, the components renders each item correctly", ()=>{
   afterEach(cleanup);
   
   it("Shows the value of each item passed in the array", () => {
      const { getByText } = render(<Box items={[{name:'Sample Name', active:false,data:{}}]} />);
      expect(getByText("Sample Name")).toBeVisible();
    });

});
