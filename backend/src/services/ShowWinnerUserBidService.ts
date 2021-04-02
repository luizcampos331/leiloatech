import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import UserBid from '../models/UserBid';

interface IWinner {
  name: string;
  bid: number;
  collection: number;
}

class ShowWinnerUserBidService {
  public async execute(): Promise<IWinner> {
    const usersBidsRepository = getRepository(UserBid);

    // Find users bids
    const usersBids = await usersBidsRepository.find();

    // Chack if exists bids
    if (JSON.stringify(usersBids) === '[]') {
      throw new AppError('Bids not found');
    }

    // Calculates the collection
    const collection = usersBids.length * 0.98;

    // Check if there are equal bids
    const equalBids: number[] = [];

    usersBids.forEach((userBid, index) => {
      usersBids.forEach((userBid2, index2) => {
        if (userBid.bid === userBid2.bid) {
          if (index !== index2) {
            equalBids.push(userBid.bid);
          }
        }
      });
    });

    // Create temporary array without equal bids
    let usersBidsTmp = usersBids;

    equalBids.forEach(bid => {
      usersBidsTmp = usersBidsTmp.filter(userBid => userBid.bid !== bid);
    });

    // Check if exists unique bid
    if (JSON.stringify(usersBidsTmp) === '[]') {
      throw new AppError('Unique bid not found');
    }

    // Find the lowest bid
    let minBid = 0;
    let nameWinner = '';

    usersBidsTmp.forEach(userBid => {
      if (minBid === 0) {
        minBid = userBid.bid;
        nameWinner = userBid.name;
      } else if (minBid > userBid.bid) {
        minBid = userBid.bid;
        nameWinner = userBid.name;
      }
    });

    const winner = {
      name: nameWinner,
      bid: minBid,
      collection: Number(collection.toFixed(2)),
    };

    return winner;
  }
}

export default ShowWinnerUserBidService;
