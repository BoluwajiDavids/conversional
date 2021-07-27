import { render, cleanup } from '@testing-library/react';
import Box from '../../../components/box/bgBox';


describe("Ensure that box renders children correctly", ()=>{
   afterEach(cleanup);
   
   it("Shows the value of text prop when it is passed", () => {
      const { getByText } = render(<Box ><p>Sample Text</p></Box>);
      expect(getByText("Sample Text")).toBeVisible();
    });

});

