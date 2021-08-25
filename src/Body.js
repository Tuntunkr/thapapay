import React from "react";

function Body() {
  return (
    <div>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <h1 className="display-2">What Is Cryptocurrency?</h1>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src="./img/crypto.jpg" alt="heroimg" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">Cryptocurrency is digital money.</h1>
              <p className="main-hero-para">
                Because it’s purely digital, there are no physical coins or
                bills tied to it.
              </p>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images"></div>
          </div>
        </section>
      </header>
      <div className="container content-wrap">
        <h3 className="cont-1">
          It’s easy to get tripped over the technicalities of cryptocurrency, so
          let’s start with the cryptocurrency basics.
        </h3>

        <h3 className="cont-1">
          
          <span
            style={{ "text-transform": "capitalize", "font-weight": "bolder" }}
          >
            
            Cryptocurrencies are not tied to valuable assets-
          </span>
          they are not tied to anything of value in the real world
          <br /> and this makes the value fluctuate erratically, which you’ve
          likely seen.
        </h3>

        <h3 className="cont-1">
          For example, in July of 2019, Bitcoin fell about $530, or 5%, in a
          40-minute span after being mostly flat for the <br /> day. Why? There
          was speculation, but no real answer.
        </h3>

        <h3 className="cont-1">
          In February of 2021, the price of a single bitcoin "briefly rose above
          $50,000", setting a new record. Why? There
          <br /> was speculation, but no real answer.
        </h3>

        <h3 className="cont-1">
          Unlike stocks, bonds, artwork, real estate, or precious metals,
          cryptocurrencies have
          <br /> no use or value outside of possession.
        </h3>
        <h3 className="cont-1">
          GoldSilver’s founder, Mike Maloney, likes to compare "crypto" to gold
          — except the big distinction there is that gold actually has a purpose
          outside of using it for currency.
        </h3>

        <h3 className="cont-1">
          Gold is a vital component in electronics, and jewelry — and thus has
          value outside of its limited supply.
        </h3>

        <h3 className="cont-1">
          Cryptocurrency, on the other hand, only costs money because someone
          else has it, and wants money
          <br /> to give it to you.
        </h3>
        <h3 className="cont-1">
          Currencies have always faced two problems in general:
        </h3>
        <h3 ><li>
        They require a central authority to regulate their value, production,
          and authenticity.
        </li>
         
        </h3>
        <h3 >
          <li>They fall victim to fraudulent creation.</li>
        </h3>
        <br/>
        <h3 className="cont-1">
          Bitcoin — one of the many forms of cryptocurrency — was invented to
          combat these exact problems.
        </h3>
        <h3 className="cont-1">
          The blockchain system (which we’ll explain in a minute) and high-level
          encryption address both problems.
        </h3>
        <h3 className="cont-1">
          Because Bitcoin is automated and highly encrypted, the system doesn’t
          require a central authority to regulate
          <br /> it (in fact, it can’t be regulated) and transactions cannot be
          fraudulent.
        </h3>
        <h3 className="cont-1" style={{ "font-weight": "bolder" }}>
          That’s all bitcoin is — the answer to the question “what would it take
          to create a virtual <br />
          currency without a central authority?”
        </h3>

        {/* Second  */}

        <h1  >
          Cryptocurrency Basics: How Cryptocurrency Works
        </h1>
       
        <br />
        <h3>
          In order to understand cryptocurrency, you should also understand the
          following technologies and principles:
        </h3>
        <h3 >Cryptography</h3>
        <h3>
          Cryptocurrency utilizes cryptography — the method of disguising and
          revealing information — to ensure the security of user information and
          transactions are done safely.
        </h3>
        <br />
        <h3 >Blockchain</h3>
        <h3>
          A blockchain is a form of Distributed Ledger Technology (DLT), which
          is essentially a database spread over multiple operators (nodes,
          computing devices, etc.)
        </h3>
        <br />
        <h3>
          This is the technology that powers an entire cryptocurrency. It’s
          essentially a digital ledger that verifies accounts, balances, and
          transactions.
        </h3>
        <br />
        <h3>
          There are many uses for blockchain outside of financial purposes such
          as supply chain management, tracking art ownership, and even digital
          collectibles.
        </h3>
        <br />
        <h3>
          A term related to blockchain that will also be used throughout this
          article is a node. A node is the individual part of the larger data
          structure that is a blockchain. Without nodes, the entire system would
          fall apart.
        </h3>
        <br />
        <h3>
          Cryptography and blockchain help cryptocurrencies create new coins,
          enforce legitimate transactions, and create a secure system.
        </h3>
        <br />
        <h3 >De-Centralized</h3>
        <br />
        <h3>
          Decentralization, as seen with Bitcoin, means that all authoritative
          power is distributed among all the peers on a network, and there isn’t
          one individual point of failure.
        </h3>

        <h3>
          For example, in order to “hack” Bitcoin, someone would need to hack
          into at least 51% of the large network of computers responsible for
          running Bitcoin, which is considered an impossible task.
        </h3>

        <h3 >Peer-to-Peer </h3>
        <h3>
          Cryptocurrency can be sent directly between two people without the
          need for a broker. These transfers are done with very low processing
          fees that go to compensate the network, making it possible for users
          to bypass hefty transaction fees by more traditional payment transfer
          services.
        </h3>
        <br />
        <h3>That means no need for a PayPal, Zelle, or a bank. </h3>

        <h3 >The Different Forms of Cryptocurrencies</h3>

        <h3>
          When most people think of a cryptocurrency, chances are that they’re
          thinking of Bitcoin (BTC). Bitcoin is considered the cryptocurrency
          flagship — the coin that launched thousands of coins.
        </h3>

        <h3>
          As seen on popular cryptocurrency price tracker CoinMarketCap.com,
          there are over 2,500 cryptocurrencies, many of which use their own
          custom blockchain designed to their specifications.
        </h3>

        <h3>
          Don’t worry; you don’t need to learn every single cryptocurrency to
          understand the cryptocurrency basics. Let’s go over a few of the most
          popular types to give you an idea.
        </h3>
        <br/>
        <br/>

        <img src="./img/bti2.jpg" alt="heroimg" className="img-fluid-1" />
            <br/>
            <br/>
        <h3 >Bitcoin (BTC)</h3>

        <h3>
          Referred to as “digital gold” or the gold standard for cryptocurrency,
          Bitcoin, which debuted in 2009, has reigned king over every other
          cryptocurrency.
        </h3>

        <h3>
          With a market capitalization of over $900 billion, Bitcoin dominates
          the rest of the cryptocurrencies with the lion’s share of the total
          cryptocurrency market cap.
        </h3>

        <h3>
          Investing in just one Bitcoin is an expensive endeavor compared to
          other investment vehicles. Just for comparison, one bitcoin is
          equivalent to $48,920.30.
        </h3>
        <br/>
            
        <h3 >Litecoin (LTC)</h3>
        <br/>

        <h3>
          Referred to as the “silver to Bitcoin’s gold,” Litecoin was created as
          a fork (or split) from Bitcoin and released in 2011 as competition.
        </h3>

        <h3>
          Litecoin was made to process transactions faster and cheaper than
          Bitcoin. One Litecoin is equal to about $178.93.
        </h3>
        <br/>

        <h3 >Ethereum (ETH)</h3>
        <br/>

        <h3>
          Ethereum is another cryptocurrency powerhouse, but it isn’t actually
          meant to be a peer-to-peer payment system in the same way Bitcoin is.
        </h3>
        <h3>
          Ethereum was launched in 2015 as a decentralized software platform
          that powers smart contracts (programmatically enforced contracts) and
          distributed applications (“decentralized” apps or dApps, which we’ll
          discuss next).
        </h3>
        <br/>

        <h3 >dApps</h3>
        <br/>

        <h3>
          These decentralized applications are open source, autonomous, have
          100% uptime, and leverage all the benefits of a blockchain (no central
          server, extremely difficult to be hacked, etc.)
        </h3>

        <h3>
          Imagine the apps in the iTunes store are instead their own entites
          instead of being centralized through Apple — that’s what a dApp is.
        </h3>

        <h3>
          There are nearly 3,000 dapps using Ethereum’s blockchain and the
          blockchain of a few Ethereum competitors such as EOS, NEO, and Qtum.
        </h3>
        <br/>

        <h3 >Smart Contracts </h3>
        <br/>

        <h3>
          These are strings of code that automatically execute a certain task
          when specific conditions are met. For example, Alex could set up a
          smart contract to “pay Steven $40 if he sends 10 unique logo designs
          by December 8th, 2021."
        </h3>

        <h3>
          Once Steven completes this task, the smart contract automatically pays
          him the $40. If he doesn’t, then Alex is returned his $40.
        </h3>
        <br/>

        <h3 >Different Types of Cryptocurrency</h3>
        <br/>

        <h3>
          Let’s go over a small difference that many people get tripped over
          when trying to understand cryptocurrency basics. There are two
          different types of cryptocurrency: coins and tokens.
        </h3>

        <img
          src="./img/crypto-type.jpg"
          alt="heroimg"
          className="img-fluid-1 img"
        />
            <br/>
        <br/>
        <h3 >Coins</h3>

        <h3>
          A coin is a cryptocurrency that has its own blockchain, such as
          Bitcoin, Ethereum, Litecoin, Ripple.
        </h3>

        <h3 style={{ "font-weight": "bolder" }}>
          When someone says they "bought cryptocurrency", they are referring to
          buying coins.
        </h3>
        <br/>

        <h3 >Token</h3>
        <br/>

        <h3>
          A token is a cryptocurrency that is built on another blockchain, for
          example a dApp that runs on Ethereum’s blockchain.
        </h3>

        <h3>
          Tokens represent an asset or utility for a specific project and are
          sold (or given) to during the first public sale for a project, an
          Initial Coin Offering (ICO), which mirrors an Initial Public Offering
          in the stock market.
        </h3>

        <h3>
          The United States Government has been focused on tracking down
          fraudulent ICOs, but that’ something we’ll get to later on.
        </h3>

        <h3>
          There is another very important distinction with tokens. There are two
          general types of tokens: utility and security.
        </h3>
        <br/>

        <h3 >Utility Token</h3>
        <br/>

        <h3>
          A utility token is intended to only be used to buy products or
          services from the company or platform that issues them.
        </h3>
        <br/>

        <h3 >Security Token</h3>
        <br/>

        <h3>
          A security token is essentially a digital version of financial
          security that acts as a share of the value of an enterprise, similar
          to how owning AAPL essentially means you own a chunk of Apple.
        </h3>

        <h3>
          In other words, security tokens pay dividends, share profits, pay
          interest or invest in other tokens or assets to generate profits for
          the token holders.
        </h3>

        <h3>
          A digital asset is considered a security token if it meets three
          criteria:
        </h3>

        <h3>
        <ul>
          <li>It requires a monetary investment. </li></ul>
        </h3>
        <h3>
        <ul>
          <li>The collected funding goes to a single enterprise.</li></ul>
        </h3>
        <h3>
        <ul>
          <li>
            Investors give their money with the expectation of gaining income
            derived on the work of the third party.
          </li></ul>
        </h3>

        <h3 >Example of a Cryptocurrency Transaction</h3>
        <br />
        <br />
        <h3>
          To further understand cryptocurrency basics, here’s how a hypothetical
          cryptocurrency transaction takes place.
        </h3>
        <br />
        <h3>Let’s assume Alex wants to send Steven $5 worth of BTC.</h3>
        <br />
        <h3>
          <ul>
            <li>
              Steven sends his Bitcoin address (what’s known as a “hashed public
              key”) to Alex. This Bitcoin address is linked to whatever exchange
              or cryptocurrency wallet Steven set up. It looks something like
              this:
            </li>
          </ul>
        </h3>
        <br />
        <h3>
          <ul>
            <li>
              Alex enters the address in his cryptocurrency exchange or wallet
              along with the Bitcoin (BTC) amount — about 0.0005 BTC, which is
              equivalent to just under $25, and presses send.
            </li>
          </ul>
        </h3>
        <br />
        <h3>
          <ul>
            <li>
              Steven receives the BTC minus a small fee. According to
              bitcoinfees.info, these fees can range anywhere between $0.05 to
              be delivered within the next hour or $0.58 within ten minutes. It
              doesn’t matter if Alex sent $25 or $25,000,000 — the fees would
              still be the same.
            </li>
          </ul>
        </h3>
        <h3>How Investors Buy or Trade Cryptocurrency</h3>
        <br/>
        <img
          src="./img/bti-3.jpg"
          alt="heroimg"
          className="img-fluid-1 img"
        />
        <br/>
        <br/>
        <br/>
        <h4>Purchasing cryptocurrency has become a user-friendly process in the past year, with popular financial companies such as Robinhood and Square Cash jumping on board. </h4>

        <h4>Here are a few alternative ways that investors currently buy or trade cryptocurrency to help boost your cryptocurrency IQ.</h4>
        <br/>
        <h3>Coinbase</h3>
        <br/>
        <h4>Coinbase built its reputation as a leader in the cryptocurrency exchange space by drastically simplifying how users buy cryptocurrency. </h4>
        
        <h4>Coinbase has some of the highest exchange fees out of all of the cryptocurrency exchanges, with a 1.49% transaction fee if using a bank account or a whopping 3.99% if using a credit card. </h4>

        <br/>
        <br/>
        <h3>Coinbase Pro</h3>
        <br/>
        <h4>Formerly known as GDAX, Coinbase Pro is an offering by Coinbase catering to more intermediate users. Coinbase Pro has more advanced and detailed trading charts and graphs, as well as more trading options. </h4>

        <h4>The transaction fees are worth noting: they range from $0.10 to $0.30 depending on the order size. </h4>
      </div>
    </div>
  );
}

export default Body;
