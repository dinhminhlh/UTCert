import Head from "next/head";
import Image from "next/image";
import { CardanoWallet, MeshBadge, useWallet } from "@meshsdk/react";
import { createTransaction, signTransaction } from "../backend";
import { useState } from "react";
import Logo from "../assess/logo.jpg";
import Main from "../assess/main.png";
// import styles from "../styles/styles.module.css";

export default function Home() {
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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const value = inputValue;
    startMining(value);
  };

  return (
    <>
      <Head>
        <title>Atala PRISM Browser Wallet</title>
        <style>{`
          html{
            background-color: aliceblue;
            background: url("nen.jpg");
            background-size: cover;
            background-attachment: fixed;
        }
        body{
            font-family:  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: bolder;
            margin: 20px 0px 20px 70px;
            padding: 20px 20px;
            width: 400px;
            background-color: rgb(255, 255, 255);
            border-radius: 5px;

        }
        #logo{
            display: flex;
            align-items: flex-end;
            color: red;
            font-size: 40px;
            margin: 0px 0px 20px 0px;
        }
        #logo img{
            height: 100px;
        }
        #sub-title{
            color: red;
            font-size: 23px;
        }
        #main-title{
            color: red;
            font-size: 35px;
        }
        #sub{
            color: gray;
        }
        #main-img img{
            width: 90%;
        }
        .but{
            overflow: hidden;
            border-radius: 25px;
            width: 95%;
            height: 50px;
            margin: 10px auto;
        }
        .but a{
            color: white;
            text-decoration: none;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #register-but{
            background-color: rgb(225, 11, 11);
        }
        #recover-but{
            background-color: black;
        }
        #link-but{
            background-color: rgb(231, 20, 20);
        }
        .text-muted {
            --bs-text-opacity: 1;
            color: #6c757d !important;
        }
        .but:hover {
            border: rgb(96, 96, 238) solid 2px;

        }
        `}</style>
      </Head>
      <div className="container-big">
        <div id="logo">
          <Image src={Logo} alt="logo" />PRISM
        </div>
        <div id="sub-title">
          Welcome to your
        </div>
        <div id="main-title">
          Atala PRISM Browser Wallet
        </div>
        <div id="sub">
          Register a new wallet or recover an existing wallet
        </div>
        <div id="main-img">
          <Image src={Main} alt="logo" />PRISM
        </div>
        <div className="but" id="recover-but">
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
        </div>
        <div className="but" id="register-but">
          <a href="../login/creat.html">Create wallet</a>
        </div>
      </div>
    </>
  );
}
