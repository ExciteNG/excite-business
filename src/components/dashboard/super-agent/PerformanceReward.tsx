"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import caution from "@/../public/assets/img/cautionSign.png";
import RewardTable from '../shared/RewardTable';
import { rewardRecipients } from '@/lib/dummyData';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectValue, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const PerformanceReward = () => {
    const [rewardType, setRewardType] = useState('REWARDS');

  return (
    <section className='space-y-7'>
      <div className='space-y-2'>
        <p className='text-lg font-semibold'>Categories</p>
        <div className='w-full flex items-center justify-between'>
          {" "}
          <div className='flex items-center space-x-4'>
            <p
              className={`text-sm font-medium text-slate-600 ${
                rewardType === "REWARDS" ? "border-[#A7CC48]" : "border-white"
              } border-b-2 px-1 cursor-pointer`}
              onClick={() => setRewardType("REWARDS")}
            >
              Rewards
            </p>
            <p
              className={`text-sm font-medium text-slate-600 ${
                rewardType === "INCENTIVES"
                  ? "border-[#A7CC48]"
                  : "border-white"
              } border-b-2 px-1 cursor-pointer`}
              onClick={() => setRewardType("INCENTIVES")}
            >
              Incentives
            </p>
            <p
              className={`text-sm font-medium text-slate-600 ${
                rewardType === "INTERVENTIONS"
                  ? "border-[#A7CC48]"
                  : "border-white"
              } border-b-2 px-1 cursor-pointer`}
              onClick={() => setRewardType("INTERVENTIONS")}
            >
              Interventions
            </p>
          </div>
          <Dialog>
            <DialogTrigger>
              <div className='bg-[#027A48] text-white text-sm hover:bg-[#00AA4F] hover:scale-105 rounded-lg p-2.5 shadow-lg'>
                Create Reward
              </div>
            </DialogTrigger>
            <DialogContent>
              <form
                action=''
                className='w-full border border-slate-100 rounded-lg p-4 mt-4 space-y-4'
              >
                <div className='space-y-1'>
                  <Label>Reward Title*</Label>
                  <Input type='text' placeholder='enter your reward title' />
                </div>
                <div className='space-y-1'>
                  <Label>Sales target</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select target range' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='>90'>90 - 100%</SelectItem>
                      <SelectItem value='>80'>80 - 89%</SelectItem>
                      <SelectItem value='>70'>70 - 79%</SelectItem>
                      <SelectItem value='>50'>50 - 69%</SelectItem>
                      <SelectItem value='<50'>20 - 49%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-1'>
                  <Label>Reward type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select reward type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='reward'>Rewards</SelectItem>
                      <SelectItem value='incentive'>Incentives</SelectItem>
                      <SelectItem value='intervention'>Intervention</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-1'>
                  <Label>Description*</Label>
                  <Textarea rows={5} />
                  <span className='text-xs text-slate-500'>
                    Min 10 characters / Max 500 characters
                  </span>
                </div>
                <div className='space-y-1'>
                  <Label>Prize*</Label>
                  <Input type='text' placeholder='enter the reward prize' />
                </div>
                <div className='w-full'>
                  <Button className='w-full bg-[#027A48] hover:bg-[#00AA4F] hover:scale-105'>
                    Save Reward
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className='pt-3'>
          <div className='border rounded w-[calc(100%-300px)] p-2 border-[#A7CC48] bg-[#F4FFD8] flex items-center space-x-3'>
            <Image src={caution} alt='caution sign' className='w-7 h-7' />
            <span className='text-xs font-medium '>
              In this category, select a tier and click the reward button to
              notify them about the reward.
            </span>
          </div>
        </div>
      </div>
      {rewardType === "REWARDS" && (
        <div className='space-y-10'>
          <RewardTable title='platinum' recipients={rewardRecipients} />
          <RewardTable title='diamond' recipients={rewardRecipients} />
          <RewardTable title='gold' recipients={rewardRecipients} />
        </div>
      )}
      {rewardType === "INCENTIVES" && (
        <RewardTable title='incentive' recipients={rewardRecipients} />
      )}
      {rewardType === "INTERVENTIONS" && (
        <RewardTable title='intervention' recipients={rewardRecipients} />
      )}
    </section>
  );
}

export default PerformanceReward;