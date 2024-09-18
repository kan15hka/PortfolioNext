"use client";
import React, { useEffect, useState } from "react";
import { CircularProgress, Progress } from "@nextui-org/progress";

interface CategoriesSolved {
  difficulty: string;
  totalQuestions: number;
  solved: number;
}

interface FetchedData {
  ranking: number;
  totalSolved: number;
  categoriesSolved: CategoriesSolved[];
  totalQuestions: number;
}

export const LeetCodeData = () => {
  const [data, setData] = useState<FetchedData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-api-faisalshohag.vercel.app/kan15hka"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        // Restructure the data into the required format
        const filteredData: FetchedData = {
          ranking: result.ranking,
          totalSolved: result.totalSolved,
          totalQuestions: result.totalQuestions,
          categoriesSolved: [
            {
              difficulty: "Easy",
              totalQuestions: result.totalEasy,
              solved: result.easySolved,
            },
            {
              difficulty: "Medium",
              totalQuestions: result.totalMedium,
              solved: result.mediumSolved,
            },
            {
              difficulty: "Hard",
              totalQuestions: result.totalHard,
              solved: result.hardSolved,
            },
          ],
        };

        setData(filteredData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="pt-8 flex items-center justify-center">
        <div className="size-8">
          <CircularProgress label="Loading..." />
        </div>
      </div>
    );
  if (error)
    return (
      <div className="pt-10 flex items-center justify-center">
        <div className="">{`${error.message}.`}</div>
      </div>
    );

  return (
    <div className="flex flex-col justify-evenly gap-2 ">
      <div className="px-6 text-center md:hidden text-white/50">kan15hka</div>
      <div className="px-6 flex flex-row items-center justify-evenly my-auto">
        <div className="flex flex-col gap-2 items-center ">
          <div className="h-[max]  ">
            <CircularProgress
              classNames={{
                label: ` ${data?.totalSolved}/${data?.totalQuestions}`,
                svg: "w-20 h-20 md:w-25 md:h-25 lg:w-50 lg:h-50 ",
                indicator: "stroke-sky-400",
                track: "stroke-white/10",
                value: "text-lg font-semibold text-white",
              }}
              value={parseFloat(
                (
                  ((data?.totalSolved ?? 0) / (data?.totalQuestions ?? 1)) *
                  100
                ).toFixed(2)
              )} // Showing value as a percentage
              strokeWidth={2}
              showValueLabel={true}
            />
          </div>
          <div className="text-white text-sm  md:text-medium">
            {data?.totalSolved}/{data?.totalQuestions}
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          {data?.categoriesSolved.map((category) => (
            <div
              key={category.difficulty}
              className="border border-white/10 rounded-t-small"
            >
              <div className="p-2 flex flex-row justify-between">
                <div className="text-white text-sm md:text-medium">
                  {category.difficulty}
                </div>
                <div className="text-white text-sm md:text-medium">
                  {category.solved}/{data.totalSolved}
                </div>
              </div>
              <Progress
                size="sm"
                radius="none"
                classNames={{
                  base: "max-w-md",
                  indicator: "bg-gradient-to-r from-emerald-300 to-sky-400",
                  value: "text-emerald-300/50",
                  track: "bg-emerald-300/10",
                }}
                value={parseFloat(
                  ((category.solved / data.totalSolved) * 100).toFixed(2)
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
