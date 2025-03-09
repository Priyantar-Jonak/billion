import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();

        const { action, counterId } = body;

        console.log(`${action === "increment" ? "Incrementing" : "Decrementing"} Counter ${counterId} ${action}ed`);

        return NextResponse.json({
            success: true,
            data: {
                counterId,
                action,
            },
        });
    }
    catch (error) {
        return NextResponse.error(
            
            { sucess: false, error: error.message,},

            { status: 500}
        );
    }
}