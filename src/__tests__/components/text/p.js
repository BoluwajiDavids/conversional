import { render, screen, cleanup } from '@testing-library/react';
import Paragraph from '../../../components/text/p'; 


describe("Ensure that Paragraph component display correctly", ()=>{
   afterEach(cleanup);
   
   it("Shows the value of text prop when it is passed", () => {
      const { getByText } = render(<Paragraph text="Paragraph text" />);
      expect(getByText("Paragraph text")).toBeVisible();
    });

});

 