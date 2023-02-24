import React from "react";
import { MdSend } from "react-icons/md";

export default function ExpenseForm(props) {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g rent"
            onChange={props.captureCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g 100"
            onChange={props.captureAmount}
          />
        </div>
      </div>
      <button
        onClick={props.onSubmit}
        type="submit"
        className="btn"
        
      >
        Submit <MdSend className="btn-icon" />
      </button>
    </form>
  );
}
