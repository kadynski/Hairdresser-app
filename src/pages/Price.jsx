import React from "react";

const Price =()=>{
    return (
        <div id="price-div">
        <h2 className="pricing-title"> Cennik</h2>
        <table className="price-table">
          <tr className="pink-row"><td>Strzyzenie dzieci</td>
            <td className="text-right">50</td>
          </tr>
          <tr><td>Strzyzenie z myciem</td>
            <td className="text-right">50</td>
          </tr>
          <tr className="pink-row"><td>Strzyzenie z modelowaniem</td>
            <td  className="text-right">55</td>
          </tr>
          <tr><td>Modelowanie</td>
            <td className="text-right">25</td>
          </tr>
          <tr className="pink-row"><td>Czesanie koka </td>
            <td className="text-right">70</td>
          </tr>
          <tr><td>Farba"Londa"</td>
            <td className="text-right">65</td>
          </tr>
          <tr className="pink-row"><td>Farba "Ce-Ce"</td>
            <td className="text-right">85</td>
          </tr>
          <tr><td>Pasemka</td>
            <td className="text-right">100</td>
          </tr>
          <tr className="pink-row"><td>Baleyage</td>
            <td className="text-right">130</td>
          </tr>
          <tr><td>Trwa&#322;a "Swedish Perm" </td>
            <td className="text-right">65</td>
          </tr>
        </table>
      <span className="price-info">  Ceny obejmuj&#261; w&#322;osy kr&#243;tkie,
    w&#322;osy d&#322;ugie - cena do uzgodnienia</span>
    </div>
    )
};

export default Price;