import { Transaction } from './Transaction';
import { FiatCurrency } from '../Currency/FiatCurrency';
import { CryptoCurrency } from '../Currency/CryptoCurrency';

export class CryptoPurchaseTransaction extends Transaction<FiatCurrency, CryptoCurrency> {}
