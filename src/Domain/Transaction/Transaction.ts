import { MoneyBase } from '@easymoney/money/dist/money';

export class Transaction<F, T> {

    private readonly transactionTime: number;

    private readonly from: MoneyBase<F>;

    private readonly to: MoneyBase<T>;

    constructor(
        from: MoneyBase<F>,
        to: MoneyBase<T>,
        transactionTime: number
    ) {
        this.from = from;
        this.to = to;
        this.transactionTime = transactionTime;
    }

    public getFromMoney(): MoneyBase<F> {
        return this.from;
    }

    public getToMoney(): MoneyBase<T> {
        return this.to;
    }

    public getTransactionTime(): number {
        return this.transactionTime;
    }
}
