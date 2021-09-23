import"./widgetsLg.css"
import React from 'react'


export const WidgetsLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://lh3.googleusercontent.com/xj1KDl5PUft7bAdaRQy2T1HTmoR9Vjxgi1lJELDOnS6SMjaBbKr77_TJJWraRBherfdImqLUDFuNrtYu5FhShVmek0wjc2b_2RwyhfOUQes6x17mnZMA6OJt1KF7bXhCQFLGyEohIRMPuXm2IgFejhlw-9uDwl_kSRMcN2IJO_4XITD9OWaIoMaOX2gGb13N7eA7JgYGzKKcXwUmlZc01TCY3VLXkr9s93pEpzljGzs3Q5kATOpTBMR8AUNPWClQU7i-s0sFny0jAVCWDzCI9elE76UFqV0us8CBD38RvQN4f9q8hcHSG8shsiHkqw4TG1lzIZIiIvvU19i4JV79HQK1u7EczxYJFgkooQEoXAd2PCC_SqZb4Jo9K1u_DkkWKTgTge-RaqtfZjDEbj_rk5n7piPVKD2sP3b5PMLedONMvZu_shp_Z03c7LlaTAfNzD98VE9ovHWBzgCF22gD7-RPRb7vI95Vckj4opW1WZII0wrvy_qZCnUZri6dRwjUV6wG7U1XeXKVkxIe1b4pafdvEQ2LT1rrMSYmUQgeCAtQLc8dhlPCyLp6fMV3g8g_ERnO2fp0g-syXl0nJaaQhXhdzkWPPiEfNJIOZ0wkD-0owk_H3SzUI2xZQ6AqHAnoHzdqNDFndQfVu5wAH7A1kfNOJKuPOf3BloSWk9ojcF7QZa4H-ousuyIvO0cQmPoum7EmX5F70OpKbVJdsLp80-Me=w425-h943-no?authuser=0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Deepro</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Rs12.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://lh3.googleusercontent.com/pw/AM-JKLUKr5cruSl27nDkPT-YwIH1o_F4p0SoaNeHH1BsJSidPl3zOEHhAXwfYJrF89B9RnKbEh-kjuDfU5t21mgrR_XDJFKWjmVs02bOLWGF32QFhlt47i2H3EJWOF-NiqkSIlLLTztHkBqKJuvf_Ew8O_6ZfiwPOIZeQKUK3wt-HPepwNcgvv3uzY9Gv2bDWO0qSvutn_1tHfH97hnWrFUbYdobrNUraD3WgSKZqZAlApQ0sm_TlbQU07nGlq1rVeVVwABmfVAsZUUv39DpVvp2vZrV19dex6eE1adYU-CFg-wTdWDgW4tYsqXGah0wGQAJL115VcWoXKVYt_9vq3DXSZcMDA5ZMgNMQHNzidKmDoGV5c90E3Ha4AmXuj6Ydx5N3bF7ULmOejmMmL1jBEJSSGDx5pJOlPGxWwY-1hQINnlObJ5ku0DDYw1tuTRcRShm5M0sJgDf4EmbRXG39oYECn-7AdNHjByMQUyWnekPJHzu9L9e-X-6dgR-fKCwX1-tlYOwEZNT0s0QwnjQibKLyK1YJwz8gA2wKMcomVxc5NkrNRtyDn39nvX41OfVdl1IfI6uppUSA6Wzti32hB8l_422RR7fjEZfcLDF9W4GjPP4SxkqNYX7vlKFuLmILbzj3cD4iVD4NA9HbkOj3vcj1QSv7rTw-R00_DkqC4PmX7RRHsEvS9Wt0dSYMP2l1CGhqlxELhtTmAGRGk3VrMMIVg_clVyaJK-sxfuG3Y9yjB2N3iU=w1117-h849-no?authuser=0&authuser=0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Saurab Raj Mahato</span>
          </td>
          <td className="widgetLgDate">2 July 2021</td>
          <td className="widgetLgAmount">Rs5,634.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://lh3.googleusercontent.com/pw/AM-JKLXYPDfb-QrIYL3YobkmHPSWD_hWdQzWNsSs5a9ogkqK65WBZ8fzvc5Sd-5OQgTaPenn1sJPdxFfWdv062QN52XrFG9qTxzcvbaOs1XjeunkRrkDzbuoaLRljd9seehpL1B7vUp0W4nqSWp16j4bF-IVJD00jpHKYlGyxoMWkq2IhqJzMXPYoLerbSdapmI1h6KpOUKXqXjlnCHza8oAtkpSt-yq8qQq4BdSum-qP6FxMTrXgnOen-F8T19TzyPUTD2jYAzT113GgKEDT2fCXGfnVFZmBxIHll6yFJ2NKPDDoHMiB5r1KdzP8sa1gx1LfFe3kDYDvesnSiTm1pBlkHcEC31YDqSmJ_1-fTVPckEsQ0tqte9qUsZOBgDbC3JFCS2Hb_NkETx4hYWt40UOoE8LqHCTz_IGVCSP6k038uUdyYtk7SHQ0jcUp2iVicQnJ_EDABBT2fBQJVj5NRwMy6o1gdqeRYH96DPUdeNOciycpv341Y9OG97V74xnX6gKisiApxgbjGxfl5d7bNO6d3qWI08f4AtjjtQnLYP6OSRWTRLTxxlg6bZy2nncXyHJVvRGS2CG1fl9jFvf9LNGMwfI1BBfqcOxdmJnA2BFdtvoy1bwdmJuXC0MysJVmbJ_9BR7Rm3IZYFmPPfvXc_Fq4CeTy3jq2MusUGLS7BzJAylvioxS-k1SbNNZSNa_Z1MKr0tEmPrdgi5x3YE2XTXtNCiakYgjfQ0vFhkaGaF75gOIgY=w459-h943-no?authuser=0&authuser=0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Arindam Arya</span>
          </td>
          <td className="widgetLgDate">2 Aug 2021</td>
          <td className="widgetLgAmount">Rs653.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://lh3.googleusercontent.com/xQ0kfx6l4K1s6u2oPHdGmoZnb66flGDzlAcePmDGC2WEahv2fQmCsSW-ZwoOlf14tgEYKeQxhQszNyJotQ7072lCeuMPrGNwLnCUFcJxgsliJKBGXDpaDsMlTNyX3f-fTCOPiVsxMlhYd2e-Ng288jGKH25gTzOVP1YkJJsLtQgmHom9a_AHw8WhaUw0RwF5sA7MdQgnTQrv-s7-m4W7tp7dFWBn7buieKInzVvzcwvkpWx78i3beGVncxwdrFcJuUbEPToIG9gw_ZszEXBJP0Z2zRqUbGhHC06M2SCVqPrETMUX3xo4N8_K6zRiP0oXotScsWP593uS_HuM_I1mXzEw4Tbk866kI5UGiq5kT9GGGRAh-nlFXh4bvt0Fvx88xqsWR7NY8jpWyXcJVAgnjzDgKoOTNnAB55qGeUPWYGulLyU-sNzc0Lv9RCzsEdQx2iFb7FGTp-laO03ySkatDhvtNeogKQZqxdr9HVQbbtF68OtZnyhADnpbWLvdR4DpxwZJuVTMKGlMgANsvxOFvN40KbMVZgpN_pe_LLHYDswlyh4E5VURQEtYtPYTJrXkmsaTfl0nFpwiW5EFkBh4_FFnnYU6i-U2F9CqMeJ6BFysDDMZFliAtQHHet25iXtD4Aj3j8to4vDfTvfjM6_FepqiO1HNS12YBqFEDPhNJ61OoQNPelYIprdvRKkaQX4VqLIA57-Kc7qlpQzgUKiM-kOG=w459-h943-no?authuser=0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Saurav Joti Das</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Rs567.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
    )
}
