import { Card } from "@/components/ui/Card";
import { Button } from "../components/ui/button";
import { ButtonGroup } from "../components/ui/button-group";
import { Funnel, Plus, SearchIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react"

export default function Quizzes() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="mb-4 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quizzes</h1>
          <h3 className="text-xl">Browse and Manage all your quizzes</h3>
        </div>
      </div>
      <Card className="grid gap-4 bg-slate-800 p-5 border-gray-600">
        <div className="flex justify-between">
          <ButtonGroup className={"text-white"}>
            <Button className={"bg-gray-700 border-gray-500"} variant="outline">
              All
            </Button>
            <Button className={"bg-gray-700 border-gray-500"} variant="outline">
              Published
            </Button>
            <Button className={"bg-gray-700 border-gray-500"} variant="outline">
              Draft
            </Button>
          </ButtonGroup>
          <div className="flex gap-3">
            <div>
              <ButtonGroup>
                <Input placeholder="Search..." className="text-white border-gray-500" />
                <Button
                  className="bg-gray-800 border-gray-500"
                  variant="outline"
                  aria-label="Search"
                >
                  <SearchIcon className="text-gray-500" />
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <ButtonGroup>
                <Button disabled className="bg-gray-600">
                  <Funnel className="text-white"/>
                </Button>
                <Button disabled variant="outline" className="bg-gray-600 text-white border-gray-600">All Categories</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-gray-700 border-gray-700 !pl-2">
                      <ChevronDownIcon className="text-gray-500 border-gray-700"/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="[--radius:1rem]">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <VolumeOffIcon />
                        Mute Conversation
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckIcon />
                        Mark as Read
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <AlertTriangleIcon />
                        Report Conversation
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <UserRoundXIcon />
                        Block User
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ShareIcon />
                        Share Conversation
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CopyIcon />
                        Copy Conversation
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem variant="destructive">
                        <TrashIcon />
                        Delete Conversation
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <Card className="bg-gray-700 text-white border-none p-5 w-full">
            <h1 className="text-xl">Total Quizzes</h1>
            <h1 className="text-5xl font-semibold">{55}</h1>
          </Card>
          <Card className="bg-gray-700 text-white border-none p-5 w-full">
            <h1 className="text-xl">Average Score</h1>
            <h1 className="text-5xl font-semibold">{55}</h1>
          </Card>
          <Card className="bg-gray-700 text-white border-none p-5 w-full">
            <h1 className="text-xl">Accuracy</h1>
            <h1 className="text-5xl font-semibold">80%</h1>
          </Card>
        </div>
      </Card>
    </div>
  );
}
