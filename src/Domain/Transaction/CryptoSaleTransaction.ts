import { Transaction } from './Transaction';
import { FiatCurrency } from '../Currency/FiatCurrency';
import { CryptoCurrency } from '../Currency/CryptoCurrency';

export class CryptoSaleTransaction extends Transaction<CryptoCurrency, FiatCurrency> {}
