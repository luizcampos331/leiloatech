import { Request, Response } from 'express';

import CreateUserBidService from '../services/CreateUserBidService';
import ShowWinnerUserBidService from '../services/ShowWinnerUserBidService';

export default class UsersBidsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, bid } = request.body;

    const createUserBid = new CreateUserBidService();

    const userBid = await createUserBid.execute({
      name,
      bid,
    });

    return response.status(201).json(userBid);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showWinnerUserBid = new ShowWinnerUserBidService();

    const winner = await showWinnerUserBid.execute();

    return response.json(winner);
  }
}
