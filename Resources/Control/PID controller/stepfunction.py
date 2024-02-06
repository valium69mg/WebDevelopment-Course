import numpy as np
import matplotlib.pyplot as plt
import math 

plt.xlim(0, 60)
plt.ylim(0, 50)

#steps
nsteps = 500

#Temperature variation function
x = np.linspace(0,60,nsteps)
#y= (0.5*np.sin(x) + 0.5*np.sin(5*x)) + 20

#Oscillatory System Damper
A = 5 # Initial Amplitude
L = 0.25 #Decay rate 
w = 1 #Angular frequency
phi = 0 #Phase angle at t=0
y = (A*np.exp(-L*x)*np.cos(2*w*math.pi*x-phi))+20

#Step function 
M = 25.0
def step_funct(M,n_steps,start):
     step = np.zeros(nsteps)
     step[start:] = M
     return step

u_step = step_funct(M,nsteps,10)
u_step[30:] = 35.0
print(u_step)


# Input (u)

#PID CONTROLLER FUNCTION 
def PID_Z_transform(function_y,step,P,I,D):
        error_values = np.zeros(nsteps)
        u_values = np.zeros(nsteps)
        for i in range (0,nsteps):
            error = function_y[i] - step[i] 
            if i <= 1:
                u_d1 = step[i]
                error_d1 = error
                error_d2 = error_d1
            if i > 1:
                u_d1 = step[i-1]
                error_d1 = error_values[i-1]
                error_d2 = error_values[i-2]
            error_values[i]=error
            u = u_d1 + P*(error-error_d1) + I*error + D*(error - 2*error_d1 + error_d2)  
            u_values[i] = u
        return u_values
            
response = PID_Z_transform(y,u_step,0.1,0,0)

plt.title('PID Controller')
plt.plot(x,u_step,c='b')
plt.plot(x,response,c='r')
plt.show()

