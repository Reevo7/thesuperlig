-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "steamId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatar" TEXT,
    "team" TEXT,
    "goals" INTEGER NOT NULL DEFAULT 0,
    "assists" INTEGER NOT NULL DEFAULT 0,
    "saves" INTEGER NOT NULL DEFAULT 0,
    "matches" INTEGER NOT NULL DEFAULT 0,
    "mvp" INTEGER NOT NULL DEFAULT 0,
    "yellowCards" INTEGER NOT NULL DEFAULT 0,
    "redCards" INTEGER NOT NULL DEFAULT 0,
    "leagueGoals" INTEGER NOT NULL DEFAULT 0,
    "leagueAssists" INTEGER NOT NULL DEFAULT 0,
    "leagueSaves" INTEGER NOT NULL DEFAULT 0,
    "leagueMatches" INTEGER NOT NULL DEFAULT 0,
    "leagueMvp" INTEGER NOT NULL DEFAULT 0,
    "leagueYellowCards" INTEGER NOT NULL DEFAULT 0,
    "leagueRedCards" INTEGER NOT NULL DEFAULT 0,
    "careerGoals" INTEGER NOT NULL DEFAULT 0,
    "careerAssists" INTEGER NOT NULL DEFAULT 0,
    "careerSaves" INTEGER NOT NULL DEFAULT 0,
    "careerMatches" INTEGER NOT NULL DEFAULT 0,
    "careerMvp" INTEGER NOT NULL DEFAULT 0,
    "careerYellowCards" INTEGER NOT NULL DEFAULT 0,
    "careerRedCards" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_steamId_key" ON "User"("steamId");
