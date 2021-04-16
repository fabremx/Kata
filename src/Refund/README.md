# Refund

## Instructions

Develop a method in order to compute a refund with change :
`computeRefund: (refund: number) => Change`

Change is composed of :

```ts
class Change {
  coins: number; // Number of Coins of 2
  fiveBill: number; // Number of Bills of 5
  tenBill: number; // Number of Bills of 10
}
```

The method should be optimized to return the minimum number of change

Here's an exemple

| Refund | Change                                     |
| ------ | ------------------------------------------ |
| 1      | undefined                                  |
| 4      | 2 + 2 (coins: 2, fiveBill: 0, tenBill: 0)  |
| 12     | 10 + 2 (coins: 1, fiveBill: 0, tenBill: 1) |
