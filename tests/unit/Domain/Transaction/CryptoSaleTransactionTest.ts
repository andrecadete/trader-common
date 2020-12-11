import { createMoney } from '@easymoney/money';
import { CryptoCurrency } from '../../../../src/Domain/Currency/CryptoCurrency';
import { FiatCurrency } from '../../../../src/Domain/Currency/FiatCurrency';
import { CryptoSaleTransaction } from '../../../../src/Domain/Transaction/CryptoSaleTransaction';

it('Accepts Crypto to Fiat', () => {

    const toCurrency = FiatCurrency.euro;
    const fromCurrency = CryptoCurrency.bitcoin;
    const from = createMoney({ currency: fromCurrency, amount: 1});
    const to = createMoney({ currency: toCurrency, amount: 1});

    const transaction = new CryptoSaleTransaction(
        from,
        to,
        (new Date()).getTime()
    );

    expect(transaction.getFromMoney().getCurrency()).toEqual(fromCurrency);
    expect(transaction.getToMoney().getCurrency()).toEqual(toCurrency);
});
