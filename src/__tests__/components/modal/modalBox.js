import { render, screen,  cleanup } from '@testing-library/react';
import Modal from '../../../components/modal/modalBox'; 


describe("Ensure that Modal component works correctly", ()=>{
   afterEach(cleanup);
   it("Shows nothing when open prop is false or not provided", () => {
      render(<Modal />);
      expect(screen.getByTestId("modal-test")).not.toBeVisible();
   });
   
  it("Show modal when open prop is true", () => {
      render(<Modal open={true} />);
      expect(screen.getByTestId("modal-test")).toBeVisible();
   }); 

   it("Correctly render children when children are passed to the modal", () => {
      const { getByText } = render(<Modal open={true}><p>Sample Child</p></Modal>);
      expect(getByText("Sample Child")).toBeVisible();
    });


});

 