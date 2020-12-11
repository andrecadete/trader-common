import { CryptoPurchaseTransaction } from '../../../../src/Domain/Transaction/CryptoPurchaseTransaction';
import { createMoney } from '@easymoney/money';
import { CryptoCurrency } from '../../../../src/Domain/Currency/CryptoCurrency';
import { FiatCurrency } from '../../../../src/Domain/Currency/FiatCurrency';

it('Accepts Fiat to Crypto', () => {

    const fromCurrency = FiatCurrency.euro;
    const toCurrency = CryptoCurrency.bitcoin;
    const from = createMoney({ currency: fromCurrency, amount: 1});
    const to = createMoney({ currency: toCurrency, amount: 1});

    const transaction = new CryptoPurchaseTransaction(
        from,
        to,
        (new Date()).getTime()
    );

    expect(transaction.getFromMoney().getCurrency()).toEqual(fromCurrency);
    expect(transaction.getToMoney().getCurrency()).toEqual(toCurrency);
});
