import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import UserBid from '../models/UserBid';

interface IRequest {
  name: string;
  bid: number;
}

class CreateUserBidService {
  public async execute({ name, bid }: IRequest): Promise<UserBid> {
    const usersBidsRepository = getRepository(UserBid);

    const bidsQuantity = await usersBidsRepository.find();

    // Check which the bids quantity
    if (bidsQuantity.length >= 999) {
      throw new AppError('Number of maximum bids reached');
    }

    // Check if bid less than 0
    if (bid <= 0) {
      throw new AppError('Bid less than 0');
    }

    const userBid = usersBidsRepository.create({
      name,
      bid,
    });

    await usersBidsRepository.save(userBid);

    return userBid;
  }
}

export default CreateUserBidService;
