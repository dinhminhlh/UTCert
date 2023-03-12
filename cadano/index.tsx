import { CardanoWallet, MeshBadge, useWallet } from "@meshsdk/react";
import { createTransaction, signTransaction } from "../../cadano/backend";
import { useState } from "react";

function Home() {
  const { wallet, connected } = useWallet();
  const [txHash, setTxHash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');

  async function startMining(recipientAddress: string) {
    setLoading(true);

    try {
      const utxos = await wallet.getUtxos();
      const { assetName, maskedTx, originalMetadata } = await createTransaction(
        recipientAddress,
        utxos,
        wallet,
      );

      const signedTx = await wallet.signTx(maskedTx, true);

      const { appWalletSignedTx } = await signTransaction(
        assetName,
        signedTx,
        originalMetadata,
        wallet
      );

      const txHash = await wallet.submitTx(appWalletSignedTx);

      setTxHash(txHash);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }
  // @ts-ignore
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const value = inputValue;
    startMining(value);
  };

  return (
    <>
      <div className="demo">
        {connected ? (
          <>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button type="button" onClick={handleButtonClick} disabled={loading}>
              {loading ? "Creating transaction..." : "Mint Mesh Token"}
            </button>
          </>
        ) : (
          <CardanoWallet />
        )}
        {txHash && (
          <div>
            <p>Successful, transaction hash:</p>
            <code>{txHash}</code>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;