import { render, screen,  cleanup } from '@testing-library/react';
import CloseButton from '../../../components/button/close'; 


describe("Ensure that close Button component display correctly", ()=>{
   afterEach(cleanup);
   it("Shows button", () => {
      render(<CloseButton />);
      expect(screen.getByRole("button")).toBeVisible();
   }); 
  
});