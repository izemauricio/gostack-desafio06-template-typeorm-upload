import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(transaction_id: string): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transactionSearch = await transactionsRepository.findOne(
      transaction_id,
    );
    if (!transactionSearch) {
      throw new AppError('This transaction does not exist!', 404);
    }
    await transactionsRepository.delete(transaction_id);
  }
}

export default DeleteTransactionService;
