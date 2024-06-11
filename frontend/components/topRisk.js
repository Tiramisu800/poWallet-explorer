// topRisk.js
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import SearchResults from "./searchResults";

export default function TopRisk({ result }) {
  const [addressInfo, setAddressInfo] = useState(null);

  const handleAddressClick = async (address) => {
    const response = await fetch(`http://143.110.178.16:8000/address-info/${address}`, {
      headers: {
        'X-API-KEY': 'your_api_key_1'
      }
    });
    const data = await response.json();
    setAddressInfo(data);
  };

  return (
    <div id="bg">
      <section className={styles.riskResults}>
        <p className={styles.riskTitle}>Top Risk Addresses</p>
        <table className={styles.riskSection}>
          <thead>
            <tr className={styles.riskTitle}>
              <th>Address</th>
              <th>Risk Score</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr className={styles.risk} key={item.address}>
                <td className={styles.blueText}>
                  <a 
                    href="#" 
                    onClick={() => handleAddressClick(item.address)}
                    className={styles.clickableAddress}
                  >
                    {item.address}
                  </a>
                </td>
                <td>{(item.risk_score*100).toFixed(5)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {addressInfo && <SearchResults result={addressInfo} />}
    </div>
  );
}
