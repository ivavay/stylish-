import styled, { css } from "styled-components";

export default function Form() {
  return (
    <>
      <style jsx="true" global="true">{`
        .form-inputs {
          position: relative;
        }
        .field {
          display: flex;
          margin-top: 25px;
          align-items: center;
        }
        .field-bottom {
          display: flex;
          margin-top: 25px;
          align-items: center;
          margin-bottom: 180px;
        }
        .field-input {
          height: 32px;
          border-radius: 10px;
          width: 576px;
        }
        .label {
          padding-top: 50px;
          font-weight: 700;
        }
        .divider {
          border-bottom: 1px solid black;
          width: 100%;
          height: 1px;
          margin-top: 12px;
          margin-bottom: 12px;
        }
        .radio {
          width: 20px;
          display: flex;
          margin-right: 6px;
        }
        span {
          width: 100%;
        }
        p {
          width: 120px;
        }
        label {
          display: flex;
          align-items: center;
          margin-right: 30px;
        }
        .calculator-box {
          display: flex;
          width: 100%;
          justify-content: flex-end;
        }
        .calculator {
          width: 220px;

          margin: 40px;
        }
        .calc {
          margin: 15px 0;
        }
        .line {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .price {
          width: auto;
          margin: 0;
        }
        .button {
          color: white;
          background: black;
          padding: 14px 40px;
          font-size: 20px;
          margin-top: 16px;
          display: flex;
          justify-content: center;
        }
      `}</style>
      <div className="form-inputs">
        <div className="label">
          訂購資料
          <div className="divider"></div>
        </div>
        <form>
          <div className="field">
            <span>收件人姓名</span>
            <input className="field-input" />
          </div>
          <div className="field">
            <span>手機</span>
            <input className="field-input" />
          </div>
          <div className="field">
            <span>地址</span>
            <input className="field-input" />
          </div>
          <div className="field">
            <span>Email</span>
            <input className="field-input" />
          </div>
          <div className="field-bottom">
            <span>配送時間</span>
            <label htmlFor="option1">
              <input
                className="radio"
                type="radio"
                id="option1"
                name="options"
                value="option1"
              />
              08:00-12:00
            </label>

            <label htmlFor="option2">
              <input
                className="radio"
                type="radio"
                id="option2"
                name="options"
                value="option2"
              />
              14:00-18:00
            </label>

            <label htmlFor="option3">
              <input
                className="radio"
                type="radio"
                id="option3"
                name="options"
                value="option3"
              />
              不指定
            </label>
          </div>
        </form>
      </div>
      <div className="calculator-box">
        <div className="calculator">
          <div className="line">
            <div className="calc">總金額</div>
            <span className="price">NT 2397</span>
          </div>
          <div className="line">
            <div className="calc">運費</div>
            <span className="price">NT 30</span>
          </div>
          <div className="divider"></div>
          <div className="line">
            <div className="calc">應付金額</div>
            <span className="price">NT 2427</span>
          </div>
          <div className="button">確認付款</div>
        </div>
      </div>
    </>
  );
}
