import React from "react";

const Price = () => {
  return (
    <div id="price-div">
      <hr id="hr-price" />
      <table className="price-table">
        <thead>
          <tr>
            <td>
              <span className="pricing-title"> Cennik</span>
            </td>
            <td className="text-right">
              <span className="pricing-title">z&#322;</span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="blue-row">
            <td>Strzy&#380;enie dzieci</td>
            <td className="text-right">30</td>
          </tr>
          <tr>
            <td>Strzy&#380;enie z myciem</td>
            <td className="text-right">55</td>
          </tr>
          <tr className="blue-row">
            <td>Strzy&#380;enie z modelowaniem</td>
            <td className="text-right">60</td>
          </tr>
          <tr>
            <td>Modelowanie</td>
            <td className="text-right">25</td>
          </tr>
          <tr className="blue-row">
            <td>Czesanie koka </td>
            <td className="text-right">70</td>
          </tr>
          <tr>
            <td>Farba"Londa"</td>
            <td className="text-right">65</td>
          </tr>
          <tr className="blue-row">
            <td>Farba "Ce-Ce"</td>
            <td className="text-right">85</td>
          </tr>
          <tr>
            <td>Pasemka</td>
            <td className="text-right">110</td>
          </tr>
          <tr className="blue-row">
            <td>Baleyage</td>
            <td className="text-right">140</td>
          </tr>
          <tr>
            <td>Trwa&#322;a "Swedish Perm" </td>
            <td className="text-right">65</td>
          </tr>
        </tbody>
      </table>
      <span className="price-info">
        {" "}
        Ceny obejmuj&#261; w&#322;osy kr&#243;tkie, w&#322;osy d&#322;ugie -
        cena do uzgodnienia
      </span>
    </div>
  );
};

export default Price;
