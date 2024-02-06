import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

#Define model
def vehicle(V,t,u,load):
    #inputs
    #v = vehicle velocity (m/s)
    #t = time (sec)
    #u = gas pedal position (-50% - 100%)
    #load = passenger load + cargo (kg)
    Cd = 0.24 # drag coeff
    rho = 1.225 #air density (kg/m^3)
    A = 5.0 #cross-sectional area (m^2)
    Fp = 30 #thrust parameter (N/%Pedal)
    m = 500 # vehicle mass (kg)
    #calculate derivative of the velocity
    dv_dt = (1.0/(m+load)) * (Fp*u - 0.5*rho*Cd*A*V**2)
    return dv_dt

tf = 60.0 #final time for simulation
nsteps = 61 #number of time steps
delta_t = tf/(nsteps-1) #how long is each time step
ts = np.linspace(0,tf,nsteps) #linearly spaced time vector 

#Simulate step test operation 
step = np.zeros(nsteps) #u - valve % open
step[11:] = 50.0 #step up pedal position
#passangers + cargo load 
load = 200.0 #kg
#velocity inicial condition
v0 = 0.0 
#for storing results
vs = np.zeros(nsteps)

#simulate with odeint
for i in range(nsteps-1):
    u = step[i]
    #clip inputs to -50% to 100%
    if u >= 100.0:
        u = 100.0
    if u <= -50.0:
        u = -50.0
    v = odeint(vehicle,v0,[0,delta_t],args=(u,load))
    v0 = v[-1] #take the last value
    vs[i+1] = v0 #Store velocity for plotting

#plot results
plt.figure()
plt.subplot(2,1,1)
plt.plot(ts,vs,'b-')
plt.plot([0,tf],[25,25],'k--')
plt.ylabel('Velocity')
plt.xlabel('Time')
plt.show()